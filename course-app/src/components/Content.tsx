import { CoursePart } from '../types'
import Part from './Part'
import { assertNever } from '../utils'

interface Props {
  courseParts: CoursePart[]
}

function Content({ courseParts }: Props) {
  return (
    <>
      {courseParts.map((coursePart, index) => {
        switch (coursePart.kind) {
          case 'basic':
            return (
              <Part
                name={coursePart.name}
                description={coursePart.description}
                exerciseCount={coursePart.exerciseCount}
                key={index}
              />
            )
          case 'background':
            return (
              <Part
                name={coursePart.name}
                description={coursePart.description}
                exerciseCount={coursePart.exerciseCount}
                backgroundMaterial={coursePart.backgroundMaterial}
                key={index}
              />
            )
          case 'group':
            return (
              <Part
                name={coursePart.name}
                exerciseCount={coursePart.exerciseCount}
                key={index}
              />
            )
          case 'special':
            return (
              <Part
                name={coursePart.name}
                description={coursePart.description}
                exerciseCount={coursePart.exerciseCount}
                key={index}
              />
            )

          default:
            assertNever(coursePart)
            break
        }
      })}
    </>
  )
}

export default Content
