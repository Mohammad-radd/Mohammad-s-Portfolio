import { ArrowUp } from "lucide-react";

export function Footer(){

    return (
        <footer className="py-4 px-4 pt-3 flex justify-between items-center bg-card relative border-t border-border">
            <p className="text-sm text-muted-foreground">Copyright &copy; { new Date().getFullYear() } Mohammadrad</p>
            <a href="#hero" className="p-2 text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300">
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}