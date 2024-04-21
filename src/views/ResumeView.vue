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
        <ul>
          <li>Sedgwick</li>
          <li>2023&ndash;Present</li>
        </ul>
        <ul class="list">
          <li>Supported the development and rewriting of legacy desktop software into web-based applications by utilizing Vue 3 Composition API as part of an internal insurance/claims management suite comprised of 20 applications</li>
          <li>Worked collaboratively with team members to identify and define core functionality by gathering and leveraging end-user feedback, strategically identifying areas of importance and priority</li>
          <li>Participated in Agile ceremonies, sprints, and stand-ups in addition to retrospectives and grooming sessions to ensure business analysts had a strong understanding of modern web development in relation to project requirements, stakeholder milestones, and overall goals</li>
          <li>Engaged with business analysts as a technical SME to spur more effective requirements gathering to build out features and functionality by creating a comprehensive context of end-user needs; ultimately enabled the creation of a more streamlined workflow to simplify complex forms</li>
          <li>Displayed project management skills to oversee scope of the work in order to uphold team collaboration and effort in working toward the targeted minimum viable product (MVP)</li>
          <li>Led cross-functional conversations between teams to devise and implement optimizations that reduced cognitive overload by creating logical sections that could be edited to break up complex functionality; reduced the number of development errors, streamlined presentation, and increased end-user satisfaction</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Senior Front-End Developer</h3>
        <h3>Front-End Developer</h3>
        <ul>
          <li>RecogNation</li>
          <li>2021&mdash;2023</li>
        </ul>
        <ul class="list">
          <li>Developed proprietary Vue subscription-based web applications, working cross-functionally with team members throughout Agile ceremonies and sprints to set priorities based on customer and stakeholder requests</li>
          <li>Leveraged strategic thinking and planning to complete tickets within Jira, ultimately setting front-end development standards for an employee recognition platform catering to more than 150 business clients</li>
          <li>Managed a re-write of the entire front-end platform, leading a greenfield project to upgrade to Vue 3 from existing Vue 2 capabilities to ensure a consistent code base while preventing sunsetting downtime</li>
          <li>Provided user experience (UX) accessibility subject matter expertise, collaborating with internal and external stakeholders to advocate for improved product features aligned with ADA recommendations; additionally, educated team members and supervisors on the importance of accessibility</li>
          <li>Maintained React Native iOS/Android application to maintain feature parity with the web application</li>
          <li>Created and maintained Outlook add-in to deliver popular platform features into customer email client</li>
          <li>Designed and implemented a platform design system and style guide, introducing uniformity from overall application structure down to individual reusable component user interface (UI)</li>
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
          <li>Created and maintained custom responsive web design framework for rapid prototyping, ensuring consistent user experience (UX) across all device types</li>
          <li>Established process and code standards for day-to-day promotional content on the website serving 10K+ customers daily</li>
          <li>Spearheaded development and proof of concept to transform the website from a drag and drop content editor into HTML/CSS/JS templates to better integrate with Salesforce Commerce Cloud; presented to senior leadership and secured buy-in to rollout as a company standard, dramatically improving speed and efficiency</li>
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
          <li>Git</li>
          <li>HTML5</li>
          <li>JavaScript</li>
          <li>Laravel</li>
          <li>Pinia/Vuex</li>
          <li>React</li>
          <li>Responsive Web Design</li>
          <li>Sass/SCSS</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>Vue</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Creative</h3>
        <ul class="list">
          <li>Adobe CC (Illustrator, InDesign, Photoshop)</li>
          <li>Figma</li>
          <li>User Interface/Experience Design (UI/UX)</li>
          <li>Prototyping &amp; Wireframing</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Process</h3>
        <ul class="list">
          <li>Agile/SCRUM</li>
          <li>Bitbucket/GitHub/GitLab</li>
          <li>Confluence</li>
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
        <li>Minor in Computer Information Systems (CIS)</li>
        <li>Saginaw Valley State University</li>
        <li>2010 &ndash; 2014</li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheHr from '@/components/common/TheHr.vue';
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
    background: repeating-linear-gradient(-45deg, var(--stripes), var(--stripes) 0.25rem, transparent 0.25rem, transparent 1.125rem);

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
