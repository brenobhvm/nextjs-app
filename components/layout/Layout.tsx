import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Content from './Content'

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <Sidebar />
            <div className={`
            flex flex-col w-full p-7 
            bg-gray-300
        `}>
                <Topbar titulo={props.titulo} subtitulo={props.subtitulo} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}