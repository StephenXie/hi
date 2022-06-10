import Journal from './Journal'

const JournalList = ({ journals, onDelete}) => {
  return (
    <div className="relative flex flex-col mx-2 mt-3 md:mx-auto max-w-full md:w-3/5 w-11/12 items-center justify-center">
      <ul className="w-full flex flex-col">
      {journals.map((journal) => (
      <Journal key = {journal.id} journal={journal} onDelete={onDelete}/>
    ))}
      </ul>
    </div>
    
  )
}

export default JournalList
