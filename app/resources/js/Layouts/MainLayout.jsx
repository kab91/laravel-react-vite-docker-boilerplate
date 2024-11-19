import {Head} from "@inertiajs/inertia-react";

export default function MainLayout({title, children}) {
    return (
        <>
            <Head title={title}/>

            <div className="container">
                {children}
            </div>
        </>
    )
}
