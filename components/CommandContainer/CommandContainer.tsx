import styles from './CommandContainer.module.css'

interface CommandContainerProps {
  title: string
  command: any
}

const CommandContainer = ({ title, command }: CommandContainerProps) => {
  return (
    <div>CommandContainer</div>
  )
}

export default CommandContainer