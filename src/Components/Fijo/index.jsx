import { Link } from "react-router-dom"

const Fijo = props => {
    return (
        <div className="flex w-full bg-[var(--my-primary)]">
            <Link to="/" className="w-1/7 text-white underline text-center mx-4 py-2">Index</Link>
            <Link to="/test" className="w-1/7 text-white underline text-center mx-4 py-2">Test</Link>
        </div>
    )
}

export { Fijo };