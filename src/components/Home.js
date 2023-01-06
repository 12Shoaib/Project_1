import './Home.css'
function Home() {
    return (
        <div>
            <h1 className='heading'> Iam Home Page</h1>    
            <div className='ceterElements'>      
                       <p className='paragraphs'>
                Hello !!... Welcome to my first web application. If your visiting my website for the first time then please register yourself in
                the registrations page.     
            </p>
            </div>
           < div className='leftElements'>      
                       <p className='paragraphs'>
                <span className='aboutUs'> About Us</span> <br/>
                the website contain with three pages one is home page followed by a register page followed by
                a log-in page. </p>
            </div>
            < div className='leftElements2'>      
                       <p className='paragraphs'>
                Validations and storage are the major parts of the our website we are performing
                client side validations. In this website we are storing and maintaining user data.
            </p>
            </div>
        </div>
    )
}
export default Home