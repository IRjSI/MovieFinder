import React, { useState } from 'react'
import {Input} from "@nextui-org/react";
import { SearchIcon } from './SearchIcon';
import {ScrollShadow} from "@nextui-org/react";

export default function Search() {

    const [titles,setTitles] = useState([]);
    const apiKey = String(import.meta.env.VITE_API_KEY);
    const host = String(import.meta.env.VITE_HOST);
    
    const findMovie = async (query) => {
        const url = `https://movies-api14.p.rapidapi.com/search?query=${query}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': `${apiKey}`,
                'x-rapidapi-host': `${host}`
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result.contents[0]);
            setTitles(result.contents.map((item) => ({
                poster: item.poster_path,
                title: item.title,
                trailer: item.youtube_trailer
            }) || 'Unknown Title'));
        } catch (error) {
            console.error(error);
            setTitles([])
        }
    }
    
    const changeHandler = (e) => {
        const value = e.target.value;
        setTitles([])
        if (e.target.value.length === 0) {
            setTitles([]);
        } else if (e.target.value.length > 1) {
            findMovie(value)
        }
    }

    return (
        <div className="min-h-screen dark:bg-background bg-background">
            <div className='flex justify-center items-center flex-col'>

            <h2 className='text-center mt-8 hover:text-gray-300 hover:cursor-default'>Movies Finder</h2>
            <img className='w-24' src="src\assets\underline.svg" />

                <div className="w-[340px] h-[140px] px-8 rounded-2xl flex justify-center items-center text-white">

                {/* <form> */}
                    <Input
                    isClearable
                    onChange={(e) => changeHandler(e)}
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-transparent",
                            inputWrapper: [
                                "shadow-xl",
                                "bg-default-200/50",
                                "dark:bg-default/60",
                                "backdrop-blur-xl",
                                "backdrop-saturate-200",
                                "hover:bg-default-200/70",
                                "dark:hover:bg-default/70",
                                "group-data-[focus=true]:bg-default-200/50",
                                "dark:group-data-[focus=true]:bg-default/60",
                                "!cursor-text",
                            ],
                        }}
                        label="Find Movies"
                        placeholder="Search..."
                        radius="lg"
                        startContent={
                            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                        }
                        />
                    {/* </form> */}

                </div>
                <div>
                    {titles.length > 0 ? (
                        <ul className='flex flex-wrap justify-center items-center gap-7 p-8'>
                            {titles.map((item, index) => (
                                <li key={index} className="mb-2 w-[200px] group">
                                    <div className='w-full overflow-hidden rounded-md'>
                                        <a href={item.trailer} target="_blank" rel="noopener noreferrer">
                                            <img 
                                                className='mb-4 w-full transform hover:scale-105 shadow-md hover:shadow-lg hover:shadow-[#2c2c31]/50 transition-all duration-300 ease-out object-cover rounded-md' 
                                                src={item.poster} 
                                                alt={item.title}
                                            />
                                        </a>
                                    </div>
                                    <strong className="block mt-2 text-lg truncate">{item.title}</strong>
                                    <a 
                                        className='mt-2 inline-block text-blue-500 hover:text-blue-600 transition-colors duration-200' 
                                        href={item.trailer} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Watch Trailer
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            <p>Made with 💖</p>
            </div>
        </div>
    );
  }
