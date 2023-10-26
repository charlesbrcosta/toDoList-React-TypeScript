
import { PlusCircle } from '@phosphor-icons/react'

import styles from './Task.module.css'

export function Task(){
    return(
        <article className={ styles.task }>
            <form className={ styles.contentForm }>
                <input type='text' placeholder='Adicionar uma nota tarefa' />
                <button type='submit'>
                    Criar
                    <PlusCircle size={32} />
                </button>
            </form>
        </article>
    )
}