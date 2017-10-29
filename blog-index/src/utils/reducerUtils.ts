interface Entity<T> {
  id: T
}

export function entityIdMap<T extends number|string = number>(entities: Entity<T>[]) {
  return entities.reduce((obj, e) => ({
    ...obj,
    [e.id]: e
  }), {})
}