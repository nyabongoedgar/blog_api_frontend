import NavBar from '../NavBar';

const LandingPage = (props) => {

    function renderHeader(){
        return(
            <NavBar />
        )
    }

    return (
        <div>
            <header>
                {renderHeader()}
            </header>
        </div>
    );
}

export default LandingPage;