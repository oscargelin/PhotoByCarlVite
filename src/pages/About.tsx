import carlJpg from "../assets/images/carl.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <img
          src={carlJpg}
          style={{
            maxWidth: "400px",
            maxHeight: "400px",
            borderRadius: "4px",
            margin: "0 auto",
          }}
        />
        <p>
          Based in Stockholm. All prices agreed upon individually based on your
          preferred total package.
        </p>
        <p>
          My main focus as a photographer is to reflect the right feeling and
          atmosphere from your event, may it be a banquet, a couples portrait at
          home. an event at the racetrack or simply a carshoot.
        </p>
        <p>
          I work a lot with angles, colors and the natural lighting to reflect
          that special feeling combined with using foreground and background to
          provide a sense of depth to the picture.
        </p>
        <p>
          I always provide edited high resolution photos per default, but I can
          also provide original unedited versions if preferred.
        </p>
        <p>
          I can also provide physically framed photos set done and ready to hang
          up on your living room wall. Standard formats are 50*70 cm or 60*80
          cm. But can also offer custom measurements and custom frames. This is
          a slightly more "premium" service and thus slightly higher priced. But
          something I highly recommend in order to give that personal touch to
          your home whilst at the same time preserving a special memory to show
          for your friends and family.
        </p>
        <p>Don't hesitate to contact me for further dialogue.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
About;
