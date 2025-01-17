import accidentalToLetter from '../accidentalToLetter'
import accidentalToSymbol from '../accidentalToSymbol'

import noteToObject from '../noteToObject'
import hasAccidental from '../hasAccidental'
import isNote from '../isNote'

import { LETTER } from '../constants/Accidental'
import type { ScientificNote } from 'src/types'

const transferAccidentalStyle = (
  note: ScientificNote,
  referenceNote: ScientificNote,
): ScientificNote => {
  if (!isNote(referenceNote)) {
    throw new Error(`"${referenceNote}" is not a valid reference note.`)
  }

  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`)
  }

  if (!hasAccidental(referenceNote)) return note

  const { accidentalType: rAccidentalType } = noteToObject(referenceNote)
  const { accidentalType: iAccidentalType } = noteToObject(note)

  if (rAccidentalType === iAccidentalType) return note

  if (rAccidentalType === LETTER) return accidentalToLetter(note)
  return accidentalToSymbol(note)
}

export default transferAccidentalStyle
