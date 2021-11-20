class Items {
  constructor() {
    this.links = []
  }

  add(title, name, path, icon) {
    const item = new Item(title, name, path, icon)
    this.links.push(item)
  }
}

class Item {
  constructor(title, name, path, icon) {
    this.title = title
    this.name = name
    this.path = path
    this.icon = icon
  }
}

const items = new Items()

items.add(
  'menu.users.title',
  'dashboard.users.index',
  '/admin/users/index',
  {
    type: 'solid',
    name: 'user'
  }
)

items.add(
  'menu.products.title',
  'dashboard.products.index',
  '/admin/products/index',
  {
    type: 'solid',
    name: 'user'
  }
)

export default items
