import { Github } from 'lucide-react';

const Footer = () => {

    return (
        <footer className='font-[Iosevka] h-[60px] flex gap-x-3 justify-center items-center p-2 bg-zinc-950 w-full'>
            <a href="https://github.com/karad-tanmay/codestash" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 group'>
                <div className='p-2 rounded-full bg-slate-800 group-hover:bg-slate-700 text-slate-400 duration-500'>
                    <Github className='scale-85' />
                </div>
                <h2 className='text-slate-300 text-lg group-hover:underline underline-offset-1'>CodeStash.</h2>
            </a>
        </footer>
    )
}

export default Footer;