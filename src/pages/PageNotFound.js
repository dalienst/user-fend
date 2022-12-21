import pageNotFound from '../images/error.png';
import Information from '../layouts/Information/Information';

const PageNotFound = () => {
    return (
        <Information
            img={pageNotFound}
            title="Oops! Page not found"
            description="The page you are looking for does not exist"
            buttonName="Home"
            nextUrl="/dashboard"
        />
    )
}

export default PageNotFound;