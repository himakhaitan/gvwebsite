import classes from './Logo.module.css';

const Logo = (props) => {
    return(
        <div className={classes.logo}>
            <div className={classes.sub}><p>The</p></div>
            <div className={classes.main}><h2>Geeky Vision</h2></div>
            {props.tagline && <div className={classes.tagline}>Digital Solutions</div>}
        </div>
    )
}
export default Logo;