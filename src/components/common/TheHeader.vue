<template>
  <header class="header">
    <nav class="nav haunts">
      <RouterLink :to="{name: 'ResumePage'}" class="main">Chuck Hutchins</RouterLink>
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
  </header>
</template>

<script setup lang="ts" />

<style scoped lang="scss">
$nav-breakpoint: 768px;
$haunts-breakpoint: 480px;

header {
  border-block-end: 2px solid;
  padding-block-end: 1rem;

  .nav {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .main {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.0125em;
      text-decoration: none;
      border-block-end: transparent;
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

      li {
        line-height: 1;
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
}
</style>
