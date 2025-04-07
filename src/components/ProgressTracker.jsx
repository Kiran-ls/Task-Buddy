import React from 'react'

export default function ProgressTracker({tasks}) {
  let completedTasks = tasks.filter((task)=>task.completed).length
  let totalTasks = tasks.length;
  let percentage = totalTasks == 0 ? 0 : (completedTasks/totalTasks) * 100;
  return (
    <div className='progress-tracker'>
      <p>{completedTasks} out of {totalTasks} completed</p>

      <div className='progress-bar'>
        <div className='progress'
        style= {{width: `${percentage}%`}}>
        </div>
      </div>
    </div>
  )
}
