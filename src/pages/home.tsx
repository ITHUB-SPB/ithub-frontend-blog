import Post from "../ui/post/post";
import WorkList from "../ui/workList/workList";

import { works } from "../data";

export default function HomePage() {
    return (
        <>
            <section>
                <div className="container hero">
                    <div>
                        <h1>Hi, I am John, Creative Technologist</h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                        </p>
                        <a className="hero__download" href="#">
                            Download Resume
                        </a>
                    </div>
                    <img
                        className="hero__avatar"
                        src="src\assets\hero.png"
                        alt="Hero avatar"
                    />
                </div>
            </section>
            <section className="recent_posts">
                <div className="container">
                    <h2>Recent posts</h2>
                    <div className="row">
                        <Post
                            title="Making a design system from scratch"
                            date="12 Feb 2020"
                        />
                        <Post
                            title="Creating pixel perfect icons in Figma"
                            date="14 May 2026"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>Featured works</h2>
                    <WorkList works={works} limit={3} />
                </div>
            </section>
        </>
    );
}
