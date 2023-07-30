import s from './Loader.module.css'
import loader from '../../spinner.svg'

export const Loader = () => <div className={s.loader}>
    <img src={loader} alt="loading"/>
</div>

