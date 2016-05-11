mod.wizards {
    newContentElement {
        wizardItems {
            slick {
                header = LLL:EXT:slickcarousel/Resources/Private/Language/be_locallang.xlf:slickwizardheader
                elements {
                    slickcarouselbasic {
                        icon = ../typo3conf/ext/slickcarousel/slick.png
                        title = LLL:EXT:slickcarousel/Resources/Private/Language/be_locallang.xlf:slickcarouselbasic.title
                        description =  LLL:EXT:slickcarousel/Resources/Private/Language/be_locallang.xlf:slickcarouselbasic.description
                        tt_content_defValues {
                            CType = slickcarouselbasic
                        }
                    }

                    slickcarouselsync {
                        icon = ../typo3conf/ext/slickcarousel/slick.png
                        title = LLL:EXT:slickcarousel/Resources/Private/Language/be_locallang.xlf:slickcarouselsync.title
                        description = LLL:EXT:slickcarousel/Resources/Private/Language/be_locallang.xlf:slickcarouselsync.description
                        tt_content_defValues {
                            CType = slickcarouselsync
                        }
                    }

                    slickcarousel {
                        icon = ../typo3conf/ext/slickcarousel/slick.png
                        title = LLL:EXT:slickcarousel/Resources/Private/Language/be_locallang.xlf:slickcarousel.title
                        description = LLL:EXT:slickcarousel/Resources/Private/Language/be_locallang.xlf:slickcarousel.description
                        tt_content_defValues {
                            CType = slickcarousel
                        }
                    }
                }
            }

            slick.show := addToList(slickcarouselbasic, slickcarouselsync, slickcarousel)
        }
    }
}
