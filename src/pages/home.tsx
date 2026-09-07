import Post from "../ui/post/post"

export default function HomePage() {
    return (
        <>
            <h1>Hi, I am John, Creative Technologist</h1>
            <section>
                <h2>Recent posts</h2>
                <div className="row">
                    <Post title="Making a design system from scratch" date="12 Feb 2020" />
                    <Post title="Creating pixel perfect icons in Figma" date="14 May 2026" />
                </div>
            </section>
        </>
    )
}
