interface Props {
  name: string
  exerciseCount: number
  description?: string
  backgroundMaterial: string
}

function Part({ name, exerciseCount, description, backgroundMaterial }: Props) {
  return (
    <div>
      <h4>
        {name} {exerciseCount}
      </h4>
      <i>{description}</i>
      {backgroundMaterial && <div> submit to {backgroundMaterial}</div>}
    </div>
  )
}

export default Part
