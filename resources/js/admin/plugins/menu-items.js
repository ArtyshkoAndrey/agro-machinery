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
  'menu.orders.title',
  'dashboard.orders.index',
  '/admin/orders/index',
  {
    type: 'solid',
    name: 'task'
  }
)

items.add(
  'menu.products.title',
  'dashboard.products.index',
  '/admin/products/index',
  {
    type: 'solid',
    name: 'box'
  }
)

items.add(
  'menu.attributes.title',
  'dashboard.attributes.index',
  '/admin/attributes/index',
  {
    type: 'solid',
    name: 'poll'
  }
)

items.add(
  'menu.manufacturers.title',
  'dashboard.manufacturers.index',
  '/admin/manufacturers/index',
  {
    type: 'solid',
    name: 'purchase-tag-alt'
  }
)

items.add(
  'menu.categories.title',
  'dashboard.categories.index',
  '/admin/categories/index',
  {
    type: 'regular',
    name: 'package'
  }
)

items.add(
  'menu.users.title',
  'dashboard.users.index',
  '/admin/users/index',
  {
    type: 'solid',
    name: 'user'
  }
)

export default items
