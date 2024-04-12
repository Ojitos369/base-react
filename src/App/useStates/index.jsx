import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useF } from "./functions";
import { useLf } from "./localFunctions";

const useStates = props => {
    const ls = useSelector(state => state.fs.ls);
    const s = useSelector(state => state.fs.s);
    const f = useF();
    const lf = useLf();

    return { ls, s, f, lf, Link, useParams, useNavigate };
}

export { useStates };