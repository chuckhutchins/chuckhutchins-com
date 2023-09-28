<template>
  <main class="resume">
    <div class="mission">
      <h1>I'm a design-oriented front-end developer focused on bringing beautiful, accessible experiences to life.</h1>
    </div>
    <TheHr />
    <div class="experience">
      <h2>Experience</h2>
      <div class="entry">
        <h3>Senior Front-End Developer</h3>
        <h3>Front-End Developer</h3>
        <ul>
          <li>RecogNation</li>
          <li>2021&mdash;2023</li>
        </ul>
        <ul class="list">
          <li>Developed proprietary Vue software as a service (SaaS) web applications, working cross-functionally with team members throughout Agile ceremonies and sprints to set priorities based on customer requests</li>
          <li>Leveraged strategic thinking and planning to complete tickets within Jira, ultimately setting front-end development standards for an employee recognition platform catering to more than 150 business clients</li>
          <li>Managed a re-write of the entire front-end platform, leading a greenfield project to upgrade to Vue 3 from existing Vue 2 capabilities to ensure a consistent code base while preventing sunsetting downtime</li>
          <li>Provided user experience (UX) accessibility subject matter expertise, collaborating with internal and external stakeholders to advocate for improved product features aligned with ADA recommendations; additionally, educated team members and supervisors on the importance of accessibility</li>
          <li>Maintained React Native iOS/Android application to maintain feature parity with the web application</li>
          <li>Created and maintained Outlook add-in to deliver popular platform features into customer email client</li>
          <li>Designed and implemented a platform design system and style guide, introducing uniformity from overall
            application structure down to individual reusable component user interface (UI)</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Front-End Developer</h3>
        <ul>
          <li>Wayne State University</li>
          <li>2020&mdash;2021</li>
        </ul>
        <ul class="list">
          <li>Collaborated with external stakeholders and designers to create, maintain, and enhance more than 100 university websites based on individual requests and requirements</li>
          <li>Supported the build-out of an open-source HTML/CSS/Tailwind/Laravel templating system utilized to generate new websites, effectively driving efficiency by mitigating repetitive tasks</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Lead Front-End Developer</h3>
        <h3>Senior Web Designer</h3>
        <h3>Digital Designer &amp; Developer</h3>
        <ul>
          <li>Art Van Furniture</li>
          <li>2017&mdash;2020</li>
        </ul>
        <ul class="list">
          <li>Created and maintained custom responsive web design framework for rapid prototyping, ensuring product delivery across all device types providing promotional content on websites serving 10K+ customers daily</li>
          <li>Spearheaded the development and proof of concept to transform the entire website to HTML CMS which could more seamlessly integrate into Salesforce Commerce Cloud; presented to senior leadership and secured buy-in to rollout as the company standard which dramatically improved speed and efficiency</li>
          <li>Trained and mentored new team members on development and design processes and tools</li>
          <li>Led and managed cross-browser/device testing/QA/UAT and internal development team code reviews</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Web Developer</h3>
        <ul>
          <li>Fullerton Tool Company</li>
          <li>2013&mdash;2016</li>
        </ul>
      </div>
    </div>
    <TheHr />
    <div class="skills">
      <h2>Skills</h2>
      <div class="entry">
        <h3>Development</h3>
        <ul class="list">
          <li>ADA Compliance</li>
          <li>CSS3</li>
          <li>Gatsby</li>
          <li>Git</li>
          <li>HTML5</li>
          <li>Javascript</li>
          <li>Laravel</li>
          <li>Pinia</li>
          <li>Responsive Web Design</li>
          <li>Sass/SCSS</li>
          <li>Tailwind CSS</li>
          <li>Vue</li>
          <li>Vuex</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Creative</h3>
        <ul class="list">
          <li>Adobe CC (Illustrator, InDesign, Photoshop, XD)</li>
          <li>Figma</li>
          <li>Sketch</li>
          <li>User Interface/Experience Design (UI/UX)</li>
          <li>Prototyping &amp; Wireframing</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Process</h3>
        <ul class="list">
          <li>Agile/SCRUM</li>
          <li>Bitbucket/GitHub/GitLab</li>
          <li>Jira</li>
        </ul>
      </div>
    </div>
    <TheHr />
    <div class="training entry">
      <h2>Training</h2>
      <ul class="list">
        <li>axe-con, 2021</li>
        <li>GatsbyConf, 2021</li>
        <li>Deque University Web Accessibility Curriculum 2.0, 2020</li>
        <li>Developing for Salesforce B2C Commerce: CCD 101, 2019</li>
        <li>An Event Apart: Seattle, 2018</li>
      </ul>
    </div>
    <TheHr />
    <div class="education entry">
      <h2>Education</h2>
      <ul>
        <li>BA Graphic Design</li>
        <li>Saginaw Valley State University</li>
        <li>2010 &ndash; 2014</li>
      </ul>
    </div>
  </main>
</template>

<script>
import TheHr from '@/components/common/TheHr.vue';

export default {
  name: 'ResumeView',
  components: {
    TheHr,
  },
};
</script>

<style scoped lang="scss">
.resume {
  display: grid;
  gap: 2rem;

  h2 {
    line-height: 1;
  }

  .entry {
    display: grid;
    gap: 0.25rem;
  }

  .mission {
    padding: 1rem 1.5rem;
    background: repeating-linear-gradient(-45deg, var(--stripes), var(--stripes) .25rem, transparent .25rem, transparent 1.125rem);

    @media (min-width: 768px) {
      padding: 2.5rem 3rem;
    }

    h1 {
      font-size: 2rem;
      line-height: 1.4;
      text-shadow: 0 1px 2px var(--text-shadow);
    }
  }

  .experience,
  .skills {
    display: grid;
    gap: 1rem;
  }
}
</style>
