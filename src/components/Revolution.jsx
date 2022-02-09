import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, useMediaQuery, IconButton } from '@mui/material';
import Lottie from 'react-lottie';

import technologyAnimation from '../animations/technologyAnimation/data.json';
import vision from '../assets/vision.svg';
import consultation from '../assets/consultationIcon.svg';
import mockup from '../assets/mockupIcon.svg';
import review from '../assets/reviewIcon.svg';
import design from '../assets/designIcon.svg';
import build from '../assets/buildIcon.svg';
import launch from '../assets/launchIcon.svg';
import maintain from '../assets/maintainIcon.svg';
import iterate from '../assets/iterateIcon.svg';

const useStyle = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

export const Revolution = () => {
  const classes = useStyle();
  const theme = useTheme();

  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction={'column'}>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography
          variant='h2'
          align={matchesLG ? 'center' : undefined}
          style={{ fontFamily: 'Pacifico' }}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems={'center'}
        marginTop={'5em'}
      >
        <Grid item xl>
          <img
            src={vision}
            alt='mounting through binoculars'
            style={{
              maxWidth: matchesMD ? '300px' : '40em',
              marginRight: matchesMD ? '0' : '5em',
              marginBottom: matchesMD ? '5em' : '0',
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction={'column'}
          xl
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesLG ? 'center' : 'right'}
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened and reshaped how we view the world.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interest, helping
              them overcome life's obstacles. Each project is a step towards
              that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems={'center'}
        marginTop={'10em'}
        marginBottom={'10em'}
      >
        <Grid
          item
          container
          direction={'column'}
          xl
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesLG ? 'center' : 'left'}
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'left'}
              paragraph
            >
              In 2013, Facebook invented a new way of building pages, like new
              system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'left'}
              paragraph
            >
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are reused and customized, each serving a singular
              purpose.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'left'}
              paragraph
            >
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Andriod apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'left'}
              paragraph
            >
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Painterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'left'}
              paragraph
            >
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'left'}
              paragraph
            >
              These technical advancements translate into saving by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography
              variant='body1'
              align={matchesLG ? 'center' : 'left'}
              paragraph
            >
              This puts personalization in your pocket - faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? 'center' : 'flex-end'}
          xl
        >
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: '40em', margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={'row'}
        justifyContent={'center'}
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant='h4' gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#B3B3B3', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher to you this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={consultation}
            alt='handshake'
            style={{ width: '100%', maxWidth: 800 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FF7373', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Then it's time for us to start on your minimum viable product.
              That's just a fancy term for a mockup. Which doesn't include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={mockup}
            alt='basic website design outline'
            style={{ maxWidth: 800, width: '100%' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Once you're completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine-details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={review}
            alt='magnifying glass'
            style={{ maxWidth: 600, width: '100%' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#A67C52', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Using the mockups and notes taken during the consulting as guides,
              we will start ironing out what the final product will look like.
              This also involves using any brand material like fonts, colors,
              and logos to extend the experience you're already familiar with.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              No aspect is superfluous, and car will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={design}
            alt='paintbrush leaving stroke of paint'
            style={{ width: '100%', maxWidth: 800 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              A second round of revie is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              This time we'll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={review}
            alt='magnifying glass'
            style={{ width: '100%', maxWidth: 600 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FBB03B', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Here's where we get down to business.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Each area is then developed in order of importance until ready to
              be connected to the next piece.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Typically the backend, behind the scenes operations are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Finishing the application doesn't mean we're done though, because
              we use extensive testing to guarantee compatibility with all
              intended devices.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Only after our rigorous examinations will we accept a product as
              finished, the pushing it through the production pipeline. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={build}
            alt='building construction site'
            style={{ maxWidth: matchesXL ? 600 : 1000, width: '100%' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#C1272D', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              The moment we've all been waiting for.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              When construction comes to a close you're the first one to know.
              We'll give our final demonstration to show off your shiny new
              software in the wild so you know exactly how ti will look to your
              users.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              When you say the word, we press the button and launch your project
              out to the public. We're there to ensure everything goes to plan
              so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={launch}
            alt='rocket'
            style={{ width: '100%', maxWidth: 100 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#8E45CE', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Our work doesn't end there.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              After a succesful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={maintain}
            alt='wrech tightening bolts'
            style={{ width: '100%', maxWidth: 200 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#29ABE2', height: '90em' }}
      >
        <Grid
          item
          container
          direction={'column'}
          alignItems={matchesLG ? 'center' : undefined}
          xl
        >
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
              align={matchesLG ? 'center' : 'left'}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              By planning for future features and changes we can build an evolve
              your application over time. As new use cases and customer needs
              develop we can respond with continuous integration of new content.
            </Typography>
            <Typography
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              gutterBottom
              align={matchesLG ? 'center' : 'left'}
            >
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl style={{ alignSelf: 'center' }}>
          <img
            src={iterate}
            alt='falling dominos'
            style={{ width: '100%', maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
