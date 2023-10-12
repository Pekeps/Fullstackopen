import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes.filter(a => 
    a.content.toLowerCase().includes(state.filter.toLowerCase())))

  const vote = (id) => {
    dispatch(addVote(id))
  }

  return (
    <ul>
      {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </ul>
  )
}

export default AnecdoteList