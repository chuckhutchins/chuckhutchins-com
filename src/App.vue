<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <RouterLink :to="{name: 'ResumePage'}" class="main">Chuck Hutchins</RouterLink>
        <ul class="haunts">
          <li>
            <a href="mailto:chuck@chuckhutchins.com" aria-label="Email Me">chuck@chuckhutchins.com</a>
          </li>
          <li>
            <a href="https://github.com/chuckhutchins" aria-label="View My Profile on GitHub">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chuckhutchinsdesign/" aria-label="View My Profile on LinkedIn">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </header>
    <RouterView />
    <footer class="footer">
      <nav>
        <ul class="haunts">
          <li><a href="mailto:chuck@chuckhutchins.com" aria-label="Email Me">chuck@chuckhutchins.com</a></li>
          <li><a href="https://github.com/chuckhutchins" aria-label="View My Profile on GitHub">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/chuckhutchinsdesign/" aria-label="View My Profile on LinkedIn">LinkedIn</a></li>
        </ul>
      </nav>
      <div>
        Made with 💀
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped lang="scss">
// TODO: fix header/footer styles for mobile
// TODO: extract header/footer into components
// TODO: experiment with heavier weights
//nav {
//  width: 100%;
//  font-size: 12px;
//  text-align: center;
//  margin-top: 2rem;
//
//  a.router-link-exact-active {
//    color: var(--color-text);
//  }
//
//  a.router-link-exact-active:hover {
//    background-color: transparent;
//  }
//
//  a {
//    display: inline-block;
//    padding: 0 1rem;
//    border-left: 1px solid var(--color-border);
//  }
//
//  a:first-of-type {
//    border: 0;
//  }
//}
.container {
  width: calc(100% - 2rem);
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: start;
  grid-gap: 2rem;
  min-height: 100dvh;
}

.not-found {
  h1 {
    margin-bottom: .5rem;
  }
}

header {
  border-bottom: 2px solid;
  padding-bottom: 1rem;

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
      letter-spacing: -.0125em;
      text-decoration: none;
      border-bottom: transparent;
    }
  }
}

.haunts {
  $haunts-breakpoint: 424px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 100%;

  @media (min-width: $haunts-breakpoint) {
    width: unset;
    grid-template-columns: repeat(3, min-content);
  }

  li {
    line-height: 1;
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

footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid;
  padding-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .copyright {
    line-height: 1;
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
}
</style>
