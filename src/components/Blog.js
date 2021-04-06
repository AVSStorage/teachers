import {Link} from "react-router-dom";

function Blog() {
    const card = {
        id: 1,
        image: 'student3.png',
        title: "Владислав Тарасов"
    }
    return (
        <div className="d-flex mt-8 flex-column">
        <h2 className="material__title mb-4">Блог</h2>
        <div className="card p-4">
            <div className="d-flex">
        <img className="profile__image" src={require('../static/img/'+card.image).default} />
            <div className="ml-3" >
                <h3 className="card__title">{card.title}</h3>
                <Link className="btn-blue" to={`/student/${card.id}`}>Подробнее</Link>
            </div>
            </div>
            <p className="card__description pl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ultricies ac. Feugiat ultrices orci pellentesque nibh placerat nisi, cras. Sit ut tincidunt viverra commodo nibh leo luctus nisl.
Vulputate quis dignissim id massa adipiscing odio purus. Egestas vulputate vulputate eget consectetur tristique quam mattis purus suspendisse. At eu et facilisis phasellus bibendum mattis. Vestibulum quis semper odio a maecenas. Sit et fringilla ac tristique molestie nisl, pharetra, ipsum purus. Dolor amet nec tristique nulla viverra tempor. Dignissim et rhoncus et, at hac faucibus diam. Tempus malesuada ultrices quis netus ut ultricies platea.</p>
        </div>
        </div>
    )
}

export default Blog;