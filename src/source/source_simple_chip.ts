import { source_component_base } from "src/source/base/source_component_base"
import { z } from "zod"

export const source_simple_chip = source_component_base.extend({
  ftype: z.literal("simple_chip"),
})

export type SourceSimpleChip = z.infer<typeof source_simple_chip>
export type SourceSimpleChipInput = z.input<typeof source_simple_chip>
