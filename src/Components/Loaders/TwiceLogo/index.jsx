import twice_logo from '../../../static/img/twice_logo.gif';

const TwiceLogo = props => {
    return (
        <img
            src={twice_logo}
            alt='Twice Logo'
            className='w-1/2 md:w-1/4'
        />
    )
}

export { TwiceLogo };