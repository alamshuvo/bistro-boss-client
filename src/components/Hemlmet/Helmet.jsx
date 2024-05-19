
import { Helmet } from 'react-helmet-async';
const Helmeta = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{`Bistro Boss Resturent |${title}`}</title>
            </Helmet>
        </div>
    );
};

export default Helmeta;