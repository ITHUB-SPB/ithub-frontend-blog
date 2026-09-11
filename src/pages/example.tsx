type ProductCardProps = {
    title: string,
    price: number,
    inStock: boolean
}

type ProductEntry = {
    id: number,
    title: string,
    price: number,
    inStock: boolean
} // TODO

type ProductListProps = {
    products: ProductEntry[]
}

const products: ProductEntry[] = [
    { id: 1, title: 'Футбольный мяч', price: 1500, inStock: true },
    { id: 2, title: 'Клюшка', price: 12000, inStock: false },
    { id: 3, title: 'Свисток', price: 700, inStock: true },
    { id: 4, title: 'Шарф', price: 3200, inStock: true }
]

function ProductCard(props: ProductCardProps) {
    return (
        <article>
            <h3>Товар "{props.title}"</h3>
            <p>{props.price.toLocaleString('ru')}</p>
            <p style={{ color: props.inStock ? 'black' : 'gray' }}>{props.inStock ? 'Есть ' : 'Нет '}в наличии</p>
        </article>
    )
}

function ProductList(props: ProductListProps) {
    if (props.products.length === 0) {
        return <p>Товаров в разделе пока нет</p>
    }

    return (
        <section style={{ border: '2px solid rgba(25,25,25,0.5)' }}>
            {props.products.slice(0, 3).map(
                product => <ProductCard key={product.id} {...product} />
            )}
        </section>
    )
}

export default function ExamplePage() {
    return (
        <>
            <h1>Проверка</h1>
            <ProductList products={products} />
        </>
    )
}