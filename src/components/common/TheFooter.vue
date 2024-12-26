<template>
  <footer class="footer">
    <nav class="nav stuff">
      <p>Stuff:</p>
      <ul class="links">
        <li>
          <router-link :to="{ name: 'CoffeeConsumptionPage' }">Coffee</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MediaConsumptionPage' }">Media</router-link>
        </li>
      </ul>
    </nav>
    <nav class="nav haunts">
      <ul class="links">
        <li class="email">
          <a href="mailto:chuck@chuckhutchins.com" aria-label="Email Me">chuck@chuckhutchins.com</a>
        </li>
        <li class="github">
          <a href="https://github.com/chuckhutchins" aria-label="View My Profile on GitHub">GitHub</a>
        </li>
        <li class="linkedin">
          <a href="https://www.linkedin.com/in/chuckhutchinsdesign/" aria-label="View My Profile on LinkedIn">LinkedIn</a>
        </li>
      </ul>
    </nav>
    <p class="copyright">
      Made with 💀
    </p>
  </footer>
</template>

<script setup lang="ts" />

<style scoped lang="scss">
$nav-breakpoint: 768px;
$haunts-breakpoint: 480px;

.footer {
  --footer-spacing: 1rem;

  display: grid;
  gap: var(--footer-spacing);
  border-block-start: 2px solid;
  padding-block-start: 1rem;

  @media (min-width: $nav-breakpoint) {
    grid-template-columns: 1fr auto;
  }

  a,
  p,
  li {
    line-height: 1;
  }

  .stuff,
  .haunts {
    display: flex;
    justify-content: center;
    gap: var(--footer-spacing);

    @media (min-width: $nav-breakpoint) {
      justify-content: start;
    }
  }

  .stuff {
    @media (min-width: $nav-breakpoint) {
      grid-column: span 2;
    }

    .links {
      display: flex;
      justify-content: center;
      gap: var(--footer-spacing);

      @media (min-width: $nav-breakpoint) {
        justify-content: start;
      }
    }
  }

  .haunts {
    .links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
      inline-size: 100%;

      @media (min-width: $haunts-breakpoint) {
        inline-size: unset;
        grid-template-columns: repeat(3, min-content);
      }
    }

    .email {
      grid-column: span 2;
      justify-self: center;

      @media (min-width: $haunts-breakpoint) {
        grid-column: span 1;
      }
    }

    .github {
      justify-self: self-end;
    }

    .linkedin {
      justify-self: self-start;
    }
  }

  .copyright {
    line-height: 1;
    text-align: center;
  }
}
</style>
