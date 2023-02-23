'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">w2m documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-45bfe3f1ee7316c654c4964b2f717f8048bb67d60855fb400555c01d7f778188ea648fb52c35eb830cc19913e035fcc91674d65fb44563b1eb351b421c1fca17"' : 'data-target="#xs-components-links-module-AppModule-45bfe3f1ee7316c654c4964b2f717f8048bb67d60855fb400555c01d7f778188ea648fb52c35eb830cc19913e035fcc91674d65fb44563b1eb351b421c1fca17"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-45bfe3f1ee7316c654c4964b2f717f8048bb67d60855fb400555c01d7f778188ea648fb52c35eb830cc19913e035fcc91674d65fb44563b1eb351b421c1fca17"' :
                                            'id="xs-components-links-module-AppModule-45bfe3f1ee7316c654c4964b2f717f8048bb67d60855fb400555c01d7f778188ea648fb52c35eb830cc19913e035fcc91674d65fb44563b1eb351b421c1fca17"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-45bfe3f1ee7316c654c4964b2f717f8048bb67d60855fb400555c01d7f778188ea648fb52c35eb830cc19913e035fcc91674d65fb44563b1eb351b421c1fca17"' : 'data-target="#xs-injectables-links-module-AppModule-45bfe3f1ee7316c654c4964b2f717f8048bb67d60855fb400555c01d7f778188ea648fb52c35eb830cc19913e035fcc91674d65fb44563b1eb351b421c1fca17"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-45bfe3f1ee7316c654c4964b2f717f8048bb67d60855fb400555c01d7f778188ea648fb52c35eb830cc19913e035fcc91674d65fb44563b1eb351b421c1fca17"' :
                                        'id="xs-injectables-links-module-AppModule-45bfe3f1ee7316c654c4964b2f717f8048bb67d60855fb400555c01d7f778188ea648fb52c35eb830cc19913e035fcc91674d65fb44563b1eb351b421c1fca17"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MainStoreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainStoreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeroesModule.html" data-type="entity-link" >HeroesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeroesModule-54c83e2a2837a8dd54ba27df0029fd681ca2c8db07155db106126f49a147614ff969cb06b6ed7050ae8c274d0d4bc81eec53bd98018e6d29e1aa6a72bbe7361e"' : 'data-target="#xs-components-links-module-HeroesModule-54c83e2a2837a8dd54ba27df0029fd681ca2c8db07155db106126f49a147614ff969cb06b6ed7050ae8c274d0d4bc81eec53bd98018e6d29e1aa6a72bbe7361e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeroesModule-54c83e2a2837a8dd54ba27df0029fd681ca2c8db07155db106126f49a147614ff969cb06b6ed7050ae8c274d0d4bc81eec53bd98018e6d29e1aa6a72bbe7361e"' :
                                            'id="xs-components-links-module-HeroesModule-54c83e2a2837a8dd54ba27df0029fd681ca2c8db07155db106126f49a147614ff969cb06b6ed7050ae8c274d0d4bc81eec53bd98018e6d29e1aa6a72bbe7361e"' }>
                                            <li class="link">
                                                <a href="components/HeroesFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroesFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeroesRoutingModule.html" data-type="entity-link" >HeroesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-2e2d75a643f856af3701b56fd11ffebb1c5c2cfdb7b7ee137741b87fd1137ce967ce15f3320e58a88598f16ea57df5f9242bc00d47dd49734049e030ae78f9df"' : 'data-target="#xs-components-links-module-SharedModule-2e2d75a643f856af3701b56fd11ffebb1c5c2cfdb7b7ee137741b87fd1137ce967ce15f3320e58a88598f16ea57df5f9242bc00d47dd49734049e030ae78f9df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-2e2d75a643f856af3701b56fd11ffebb1c5c2cfdb7b7ee137741b87fd1137ce967ce15f3320e58a88598f16ea57df5f9242bc00d47dd49734049e030ae78f9df"' :
                                            'id="xs-components-links-module-SharedModule-2e2d75a643f856af3701b56fd11ffebb1c5c2cfdb7b7ee137741b87fd1137ce967ce15f3320e58a88598f16ea57df5f9242bc00d47dd49734049e030ae78f9df"' }>
                                            <li class="link">
                                                <a href="components/DialogContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-2e2d75a643f856af3701b56fd11ffebb1c5c2cfdb7b7ee137741b87fd1137ce967ce15f3320e58a88598f16ea57df5f9242bc00d47dd49734049e030ae78f9df"' : 'data-target="#xs-directives-links-module-SharedModule-2e2d75a643f856af3701b56fd11ffebb1c5c2cfdb7b7ee137741b87fd1137ce967ce15f3320e58a88598f16ea57df5f9242bc00d47dd49734049e030ae78f9df"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-2e2d75a643f856af3701b56fd11ffebb1c5c2cfdb7b7ee137741b87fd1137ce967ce15f3320e58a88598f16ea57df5f9242bc00d47dd49734049e030ae78f9df"' :
                                        'id="xs-directives-links-module-SharedModule-2e2d75a643f856af3701b56fd11ffebb1c5c2cfdb7b7ee137741b87fd1137ce967ce15f3320e58a88598f16ea57df5f9242bc00d47dd49734049e030ae78f9df"' }>
                                        <li class="link">
                                            <a href="directives/CustomUppercaseDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomUppercaseDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HeroesService.html" data-type="entity-link" >HeroesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatPaginatorIntlCro.html" data-type="entity-link" >MatPaginatorIntlCro</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link" >LoaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link" >Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Heroe.html" data-type="entity-link" >Heroe</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginRq.html" data-type="entity-link" >LoginRq</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedHeroes.html" data-type="entity-link" >PaginatedHeroes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Query.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});