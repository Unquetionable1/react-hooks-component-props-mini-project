import logo from "../assets/logo";

function About({image=" https://via.placeholder.com/215",about}){
return <aside>
    <img src={logo} alt="blog logo"/>
    <img src={image}/>
    <p>{about}</p>
</aside>
}

export default About;