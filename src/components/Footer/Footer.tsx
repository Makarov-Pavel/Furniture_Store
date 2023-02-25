import './Footer.css'
import {AiOutlineCopyright} from 'react-icons/ai'

const Footer:React.FC =() =>{
    return(
        <footer className="footer">
            <p>Copyright information <AiOutlineCopyright/></p>
        </footer>
    )
}

export default Footer