<script>
    import Title from "$lib/title.svelte"
    import '../../styles/global.css'
</script>

<header>
    <nav>
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/guides">Guides</a>
        </div> 
    </nav>
</header>

<main>
    <!-- page content -->
    <slot></slot>
</main>

<style>
    header  {
        text-align: center;
        background: rgba(0,0,0,0.1);
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 10px;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0px auto;

}
</style>