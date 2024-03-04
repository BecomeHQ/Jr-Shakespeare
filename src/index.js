// console.log('Jumbaya Home Page')

import { gsap, random } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', (event) => {
  //Avoid Flash
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // text splitting code
  let typeSplit

  function runSplitType() {
    typeSplit = new SplitType('[type-split]', {
      types: 'lines, words, chars',
      tagName: 'span',
    })
  }

  runSplitType()

  //Run the code when window width changes
  let windowWidth = window.innerWidth
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth
      typeSplit.revert()
      runSplitType()
    }
  })
  /**
   * Hero Interaction Start
   */

  // let typeSplit = new SplitType('[type-split]', {
  //   types: 'lines, words, chars',
  //   tagName: 'span',
  // })

  const heroInteraction = () => {
    const heroTl = gsap.timeline()

    heroTl
      .from('.navbar_component', { y: '-100%', duration: 1 })
      .from('.section_home-hero', { opacity: 0, duration: 0.5 }, '-=0.8')
      .from('.hero_title .line', {
        y: '20px',
        opacity: 0,
        duration: 1,
        stagger: { amount: 0.2, position: 'start' },
        ease: 'power1.out',
      })
      .from('.hero_content', { y: '20px', opacity: 0, duration: 1.2 }, '-=0.5')
      // .from('.hero_content_line path', { strokeDashoffset: 170, duration: 1 })
      .from(
        '[hero-price-item]',
        {
          y: '30px',
          opacity: 0,
          stagger: { amount: 0.2 },
          ease: 'power1.out',
          duration: 1,
        },
        '=-1'
      )
    // .from(
    //   '.up-arrow',
    //   {
    //     y: 10,
    //     opacity: 0,
    //     ease: 'elastic.out(1,0.3)',
    //     duration: 0.2,
    //     delay: 1,
    //   },
    //   '-=0.5'
    // )
    // .from(
    //   '.pop-content',
    //   {
    //     y: 10,
    //     scale: 0,
    //     opacity: 0,
    //     ease: 'power2.out',
    //     duration: 0.25,
    //     // delay: 1,
    //   },
    //   '<0.1'
    // )

    // console.log(heroTl.totalDuration())
  }

  // Run heroInteraction()
  // heroInteraction()

  /**
   * Hero Interaction End
   */

  /**
   * Text Link Interaction Start
   */

  let typeSplitLinks = new SplitType('.link_text', {
    types: 'words, chars',
    tagName: 'span',
  })

  $('[link]').each(function (index) {
    let listOne = $(this).find('[link_text_is-1] .char')
    let listTwo = $(this).find('[link_text_is-2] .char')
    let line = $(this).find('[line]')

    // Timeline
    let linkHoverTl = gsap.timeline({ paused: true })

    linkHoverTl.to(line, { width: 0, duration: 0.7 })
    $(this).on('mouseenter', function () {
      linkHoverTl.restart()
    })
    $(this).on('mouseleave', function () {
      linkHoverTl.reverse()
      // linkHoverTl.timeScale(1)
    })
  })

  /**
   * Text Link Interaction End
   */

  /**
   * Book Sequence Interaction Start
   */

  const bookSequenceInteraction = () => {
    const bookSequenceTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_books',
        start: 'top 75%',
      },
    })
    bookSequenceTl
      .from('.book_sequence_col-1 .book-item-wrapper', {
        opacity: 0,
        y: -50,
        stagger: { amount: 0.75 },
        duration: 0.5,
        reversed: true,
        ease: 'back.out(1.7)',
      })
      .from(
        '.book_sequence_col-2 .book-item-wrapper',
        {
          opacity: 0,
          y: -50,
          stagger: { amount: 0.75 },
          duration: 0.5,
          ease: 'back.out(1.7)',
        },
        0
      )
  }

  // bookSequenceInteraction()

  /**
   * Book Sequence Interaction End
   */

  /**
   * Book Sequence Hover Interaction Start
   */

  const books = document.querySelectorAll('.book-item-wrapper')
  let bookTl = gsap.timeline({ paused: true })

  books.forEach((book) => {
    book.addEventListener('mouseenter', () => {
      book.classList.add('grow')

      let bookItem = book.querySelector('.book-item')
      // let bookCover = book.querySelector('.book-cover')

      // console.log('enter')

      bookTl.from(bookItem, {
        rotationY: 0,
      })
      // .from(bookCover, {
      //   opacity: 1,
      // })
    })

    book.addEventListener('mouseleave', () => {
      // console.log('leave')
      book.classList.remove('grow')

      let bookItem = book.querySelector('.book-item')
      // let bookCover = book.querySelector('.book-cover')
      let rotateY
      if (window.innerWidth < 991) {
        rotateY = 20
      } else {
        rotateY = 50
      }
      bookTl.from(bookItem, {
        rotationY: rotateY,
      })
      // .from(bookCover, {
      //   opacity: 0.2,
      // })
    })
  })

  /**
   * Book Sequence Hover Interaction End
   */

  /**
   * Book 2nd Fold Interaction Start
   */

  const secondFoldInteraction = () => {
    const secondFoldTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.book-scroll-sticky-wrap',
        start: 'top 75%',
        end: 'bottom 150%',
        // scrub: true,
      },
    })

    secondFoldTl
      .from('.title-3-lines .line', {
        // translateY: '0.1em',
        // rotationY: '5.7deg',
        // rotationX: '90deg',
        y: 20,
        opacity: 0,
        stagger: { amount: 1 },
        ease: 'power1.out',
        duration: 0.7,
      })
      // .from('.down-arrow path', {
      //   strokeDashoffset: '3170px',
      //   duration: 3,
      //   ease: 'linear',
      // })
      // .from(
      //   '.text-sticker .char',
      //   {
      //     opacity: 0,
      //     stagger: { amount: 1 },
      //   },
      //   '-=2'
      // )
      .from('.sticker-2', {
        scale: 0,
        ease: 'elastic.out(1,0.5)',
        duration: 1.2,
      })
      .from(
        '.card-item',
        {
          scale: 0.6,
          opacity: 0,
          stagger: { amount: 0.3 },
        },
        '<'
      )
  }

  // secondFoldInteraction()

  /**
   * Book 2nd Fold Interaction End
   */

  /**
   * Random Book Interaction Start
   */

  const randomContentInteraction = () => {
    gsap.from(
      '.random_image_item.is-1, .random_image-middle-2.is-10, .random_image_item.is-6',
      {
        scale: 0.6,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        scrollTrigger: {
          trigger: '.random_image_wrapper',
          start: 'top 70%',
        },
      }
    )
    const randomContentTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.random_content_wrapper',
        start: 'top 50%',
      },
    })
    const stickerPath = document.querySelector('.random_mid_sticker-line')
    const stickerPathLength = stickerPath.getTotalLength()

    randomContentTl
      .from('.random_content_item', {
        y: '40px',
        opacity: 0,
        stagger: 0.4,
      })
      .fromTo(
        '.random_mid_sticker',
        {
          opacity: 0,
          scale: 0.6,
        },
        { scale: 1.3, duration: 1.2, opacity: 1, ease: 'elastic.out(1,0.5)' },
        0
      )
      .from(
        '.random_mid_sticker-line',
        {
          strokeDashoffset: -stickerPathLength,
          duration: 1.5,
          ease: 'power3.out',
        },
        0
      )
      .from(
        '.forever-text',
        {
          opacity: 0,
          duration: 0.3,
        },
        '-=0.8'
      )
      .to('.random_mid_sticker', {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.random_image_wrapper',
          start: 'top -70%',
          scrub: true,
          onLeaveBack: () => {
            gsap.to('.random_mid_sticker', { opacity: 1 })
          },
        },
      })
  }

  // randomContentInteraction()

  const bookRandomInteraction = () => {
    // Add images to array
    const randomImage = []
    for (let i = 1; i <= 9; i++) {
      randomImage.push(`.random_image_item.is-${i}`)
    }
    randomImage.push(`.random_image-middle-2.is-10`)
    for (let i = 11; i <= 24; i++) {
      randomImage.push(`.random_image_item.is-${i}`)
    }
    // console.log(randomImage)

    const bookRandomTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.random_image_wrapper',
        start: 'top -120%',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    bookRandomTl
      .to(randomImage, { opacity: 1, duration: 0.5 })
      .to(
        randomImage,
        {
          x: '0vw',
          y: '0vh',
          scale: 1,
          rotation: '0deg',
          duration: 3,
          // opacity: 1,
        },
        '<'
      )
      .from('.random_cta_wrapper', { opacity: 0 })

    // console.log(i)
  }
  // bookRandomInteraction()

  /**
   * Random Book Interaction Start
   */

  /**
   * Mobile Random Book Ix Start
   */

  const mobileBookRandomIx = () => {
    // Add images to array
    const randomImage = []
    for (let i = 1; i <= 9; i++) {
      randomImage.push(`.random_image_item.is-${i}`)
    }
    randomImage.push(`.random_image-middle-2.is-10`)
    for (let i = 11; i <= 24; i++) {
      randomImage.push(`.random_image_item.is-${i}`)
    }

    const mobileBookRandomTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.random_image_grid',
        start: 'top 60%',
      },
    })

    mobileBookRandomTl
      .from(randomImage, {
        opacity: 0,
        scale: 0.7,
        ease: 'back.out(1.7)',
        stagger: {
          from: 'random',
          amount: 1.2,
        },
      })
      .from('.random_cta_wrapper', { opacity: 0 }, '<20%')
  }

  if (window.innerWidth < 481) {
    mobileBookRandomIx()
  }

  /**
   * Mobile Random Book Ix End
   */

  /**
   * Book Open Start
   */

  const bookOpenInteraction = () => {
    let widthChange = 900
    let heightChange = 506.25
    if (window.innerWidth < 480) {
      widthChange = 540
      heightChange = 303.75
    }
    const bookWrapper = document.querySelector('.book-wrapper')
    const bookOpenTl = gsap.timeline({
      defaults: { ease: 'linear', duration: 3 },
      scrollTrigger: {
        trigger: '.section_open-book',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })
    bookOpenTl
      .set('.page-1, .page-2', {
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      })
      .to(bookWrapper, {
        width: widthChange,
        height: heightChange,
        duration: 5,
      })
      // .to(bookWrapper, { x: '0.1rem' })
      .to(
        '.page-1',
        {
          force3D: true,
          rotationY: '-180deg',
          transformStyle: 'preserve-3d',
          duration: 5,
        },
        '<'
      )
      .to('.page-2', {
        force3D: true,
        rotationY: '-90deg',
        transformStyle: 'preserve-3d',
      })
      .to('.page-1', { zIndex: 1, duration: 0 })
      .to('.page-2', {
        force3D: true,
        rotationY: '-180deg',
        transformStyle: 'preserve-3d',
      })
      .from('.word-less_content', { opacity: 0 }, '<-90%')
  }

  // bookOpenInteraction()

  /**
   * Book Open End
   */

  /**
   * Week Interaction Start
   */

  const weekInteraction = () => {
    let moveCards = 170
    switch (true) {
      case window.innerWidth > 1200:
        moveCards = 110
        break

      case window.innerWidth > 768 && window.innerWidth < 991:
        moveCards = 230
        break

      case window.innerWidth > 468 && window.innerWidth < 768:
        moveCards = 200
        break

      case window.innerWidth > 320 && window.innerWidth < 468:
        moveCards = 500
        break

      default:
        // Default action if none of the cases match
        break
    }
    const weekTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.week_scroll-long',
        start: 'top 0',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    weekTl.to('.week_card-list', {
      xPercent: -moveCards,
      duration: 1,
      ease: 'linear',
    })
  }

  weekInteraction()

  // Week Card Hover
  const weekCards = document.querySelectorAll('.week_card')

  weekCards.forEach((weekCard) => {
    const weekCardTitle = weekCard.querySelector('.text-size-medium')

    const weekCard1 = weekCard.querySelector('.week-book.is-1')
    const weekCard2 = weekCard.querySelector('.week-book.is-2')
    const weekCard3 = weekCard.querySelector('.week-book.is-3')
    const weekCard4 = weekCard.querySelector('.week-book.is-4')
    const weekCardTl = gsap.timeline({
      defaults: { ease: 'power1.out', duration: 0.5 },
      paused: true,
    })

    weekCardTl
      .to(weekCard1, { y: -20 }, 0)
      .to(weekCard2, { y: -40 }, 0)
      .to(weekCard3, { y: -80 }, 0)
      .to(weekCard4, { y: -60 }, 0)
      .to(weekCardTitle, { opacity: 0 }, 0)

    weekCard.addEventListener('mouseenter', () => {
      weekCardTl.play()
    })
    weekCard.addEventListener('mouseleave', () => {
      weekCardTl.reverse()
    })
  })
  /**
   * Week Interaction End
   */

  heroInteraction()
  bookOpenInteraction()
  if (window.innerWidth > 500) {
    // myFunction();

    bookSequenceInteraction()
    secondFoldInteraction()
    randomContentInteraction()
    bookRandomInteraction()
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      // myFunction();

      heroInteraction()
      bookSequenceInteraction()
      secondFoldInteraction()
      randomContentInteraction()
      bookRandomInteraction()
      // bookOpenInteraction()
    }
  })
})
