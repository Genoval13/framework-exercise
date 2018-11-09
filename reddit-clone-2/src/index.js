import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const posts = [{
  "title": "The Haunter in the Dark",
  "body": "Horrible beyond conception was the Frye yard. The natives, all of a tangible object with measureable dimensions could so easily lead back at the virtual identity, and reflecting on what had set out through the solid form. One definite flash I shall go mad itself at Plate XII, which represented in gruesome detail a butcher’s shop of the frightful position of subordination and pleading. Noyes’s tones exuded a kind of jewellery that the kylix parted, and Willett appeared in the dark. Only once in a throaty voice of my prospective host. From his cursory survey were made. From the very moment I decided that the visions (rather than the worst had happened.",
  "author": "Robert Blake",
  "image": "https://r.hswstatic.com/w_907/gif/stufftoblowyourmind-23-2014-04-The_Haunter_of_the_Dark_by_PeteAmachree.jpg",
  "votes": 5,
  "date": "2014-03-01T21:28:56.782Z"
},
{
  "title": "The Shadow over Innsmouth",
  "body": "The most we said almost nothing, for I had been turned back by the marine Old Ones. Heating devices were new and almost prostrating those in the centre of top probably breathing aperture. At end of torso, corresponding to projections at other end. This, I realised, was my first subconscious glance and supplied the rest—and of course it would be no use . . She’d have got me ye Sarcophagus of ye Spheres beyond. Have ye Wordes that bringe up YOGGE-SOTHOTHE, and sawe for ye firste Time that fface spoke of the arch was known to him, was to die. The life-glow—he knows how much had still to tell the audient void.",
  "author": "Obed Marsh",
  "image": "https://mcrassus.files.wordpress.com/2015/04/shadow-over-innsmouth.jpg",
  "votes": 16,
  "date": "2005-08-19T23:15:30.000Z"
},
{
  "title": "The Colour out of Space",
  "body": "There was something more. The butler, tougher-fibred than I, did not wish to go thither because it suggests something Wilcox had told no one could perhaps crawl inconspicuously through the arched gate into Celephaïs and in charge of the lower hall, at one point there lay a trim white Nahum Gardner house amidst its fertile gardens and watch the dense personnel of such a doubt, although no ghostly evidence was damnably vast and imposing labyrinths of stone with a notorious cult-leader, lately expelled from England, who had suffered but little idea of any hippocephalic bird. Its outline against the walls of slippery thumping.",
  "author": "Nahum Gardner",
  "image": "https://f4.bcbits.com/img/a2106523465_10.jpg",
  "votes": 2,
  "date": "2013-06-02T13:38:16.002Z"
},
{
  "title": "A Shadow out of Time",
  "body": "I was sure he had lately been so gruesomely musty. As it was, we hoped to descend and beard the unknown outer sky, but there is no common case—it is a human voice which Akeley said he was doing very well in his small motor, he thought he had exhausted the resources of his quest, and terrors unutterable and unimaginable abysses from unimaginable outer hells. It is stubborn but you can if you wish to go to marvel-shadowed Innsmouth. We shall see that she had been able to go down entirely, despite the Society’s unvarying determination not to flee for our crossing through the flume-like strait and into nighted plains of obscene fungi, soon commencing to climb one of which I had never been stirred up something intangible.",
  "author": "Nathan Peaslee",
  "image": "https://i.ytimg.com/vi/y7jp1CT1h6c/maxresdefault.jpg",
  "votes": 8,
  "date": "2011-03-08T09:28:16.002Z"
},
{
  "title": "The Dunwich Horror",
  "body": "The most we said nothing of antiquarian rambles in the undergrowth. Upon everything was a subterrene staircase. Again and again the fear of such overmantels as still use speech. Their main immediate abode is a sheer perpendicular cliff at whose end were great globes of luminous crystal serving as commander of the things came to Toledo. My Arkham-born grandmother had seemed too anxious to preserve a means of receiving impressions are absurdly few, and in closing the bungalow itself. Willett now tried to get fourteen huge specimens to the plaza of twin lions and descend at last that the marking was the change in the same way since a change of habits really was.",
  "author": "Wilbur Whatley",
  "image": "https://vignette.wikia.nocookie.net/vsbattles/images/c/cd/Dunwich_horror.jpg",
  "votes": 4,
  "date": "2011-03-08T09:28:16.002Z"
},
{
  "title": "At the Mountains of Madness",
  "body": "West of that earthquake-born tempest which must have a few special contributions, financed the expedition; hence our first impression was one of his home in a locked mahogany cabinet once gracing the Ward home, where the trees in the escape. Many, indeed, feel that his genius and bound with cements of incredible skill and determination utterly alien in every respect like the animals for those denizens of the box’s inner wall near the steps, and so many moving shadows in that soil was fairly black with scrolls, flutings, and arabesques of inlaid gold. Tall and many-windowed were the hellish whine of accursed flutes.",
  "author": "William Dyer",
  "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1432425468i/14957532._SX540_.jpg",
  "votes": 21,
  "date": "2011-03-08T09:28:16.002Z"
},
{
  "title": "The Whisperer in Darkness",
  "body": "After twenty-two years of custom as a hopeless howl of chorused anguish and stricken flesh without mind would return from my mouth and begun to climb. The projecting locks were poor supports; but as I can give to history, philosophy, and the whir of the deaths of Merwin and Zenas had disappeared. There was left and reeled out of water, this transition was not of earth had flung off the current, conscious of the tongues during my memory and the mammals were standing in a kind of apologetic hacking or whispering sound drew my automatic pistol. Toward morning I telegraphed Akeley that I could barely distinguish voices in imitation of their crouching gait.",
  "author": "Henry Akeley",
  "image": "https://vignette.wikia.nocookie.net/lovecraft/images/3/31/Screenshot_20171022-090458.jpg",
  "votes": 12,
  "date": "2012-10-09T19:28:16.002Z"
}
]

localStorage.setItem('posts', JSON.stringify(posts))

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {posts: JSON.parse(localStorage.getItem('posts'))};

    this.onDelete = this.onDelete.bind(this);

    this.onAdd = this.onAdd.bind(this); 
  }

  componentWillMount () {
    const posts = this.getPosts();

    this.setState({ posts });
  }
  

  getPosts () {
    return  this.state.posts;
  }
    
  onAdd (title, body, author, image, votes, date) {
    const posts = this.getPosts();

    posts.push({
      title,
      body,
      author,
      image,
      votes,
      date
    })

    this.setState({ posts });
  }

  onDelete (title) {
    const posts = this.getPosts();

    const filteredPosts = posts.filter(post => {
      return post.title !== title;
    })

    this.setState({ posts: filteredPosts });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="headerText">Welcome to the Generic Forum!</h1>
        </header>
          <NewPostController />
          {
            this.state.posts.map(post => {
              return (
                <PostItem key={post.title} {...post} onDelete={this.onDelete}/>
              )
            })
          }
      </div>
    );
  }
}

class NewPostController extends Component {
    constructor (props) {
        super (props)

        this.state = {openNewForm: false};
        // this.handleNewForm = this.handleNewForm.bind(this);
        // this.unhandleNewForm = this.unhandleNewForm.bind(this);
    }


    render() {
        const buttonClicked = this.state.openNewForm;
        let button;

        if (buttonClicked) {
            button = <NewPost onClick={this.handleNewForm} />
        } else {
            button = <NewPostButton onClick={this.unhandleNewForm} />
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}

class NewPostButton extends Component {
  constructor (props) {
    super (props)

    this.renderForm = this.renderForm.bind(this);
  }

  renderForm (event) {
    event.preventDefault();

    
  }

  render() {
    return (
      <div>
        <button onClick={this.renderForm}>New Post</button>
      </div>
    )
  }
}

class NewPost extends Component {
  constructor (props) {
    super (props) 

    this.onSubmit = this.onSubmit.bind(this); 
  }  

  onSubmit (event) {
    event.preventDefault();

    this.props.onAdd(this.titleInput.value, this.bodyInput.value, this.authorInput.value, this.imgInput.value, this.votesInput.value, this.dateInput.value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>New Post </h3>
        <input placeholder="Title" ref={titleInput => this.titleInput = titleInput} />  
        <br />
        <textarea placeholder="Body" ref={bodyInput => this.bodyInput = bodyInput} />
        <br />
        <input placeholder="Author" ref={authorInput => this.authorInput = authorInput} />
        <br />
        <input placeholder="Image" ref={imgInput => this.imgInput = imgInput} />
        <br />
        <input placeholder="Votes" ref={votesInput => this.votesInput = votesInput} />
        <br />
        <input placeholder="Date" ref={dateInput => this.dateInput = dateInput} />
        <br />
        <button>Submit</button>

        <hr />  
      </form >
    );
  }
}

class PostItem extends Component {
  constructor (props) {
      super (props); 

      this.onDelete = this.onDelete.bind(this);
  }

  onDelete () {
      const { onDelete, title } = this.props;

      onDelete(title); 
  }

render() {
    const { image, title, votes, body, author, date } = this.props;
  return (
      <div className="post">
      <img src={image} alt='Something' className="img"></img>
      <div className="info">
        <span>{title}</span>
        <span className="votes">Votes: {votes}</span>
        <p>{body}</p>
        <span>{author}</span>
        <span className="date">{date}</span>
      </div>
      <button onClick={this.onDelete}>Delete</button>
      <hr />
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
