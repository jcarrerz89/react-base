const Logo = () => {
    return <div>
        <a href={'/'}>
            <h1>Blue Bells</h1>
        </a>
        <label>{process.env.NODE_ENV}</label>
    </div>
    
}

export default Logo;