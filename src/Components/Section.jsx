import './Section.css'

export default function Section({header, children, style}){
    return (
        <div className='section' style={style}>
            <h1>{header}</h1>
            {children}
        </div>
    )
}