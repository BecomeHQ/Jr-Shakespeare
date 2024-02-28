// console.log('Jumbaya Home Page')

import { gsap } from 'gsap'

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
        scrub: true,
      },
    })

    secondFoldTl
      .from('.title-3-lines .word', {
        translateY: '0.1em',
        rotationY: '5.7deg',
        rotationX: '90deg',
        stagger: { amount: 1 },
        ease: 'power3.inOut',
        duration: 0.7,
      })
      .from('.down-arrow path', {
        strokeDashoffset: '3170px',
        duration: 3,
        ease: 'linear',
      })
      .from(
        '.text-sticker .char',
        {
          opacity: 0,
          stagger: { amount: 1 },
        },
        '-=2'
      )
      .from(
        '.sticker',
        {
          scale: 0,
          ease: 'elastic.out(1,0.5)',
          duration: 1.2,
        },
        '<30%'
      )
      .from(
        '.card-item',
        {
          scale: 0.6,
          opacity: 0,
          stagger: 0.2,
        },
        '-=1'
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
    let scaleChange = 3.3
    let marginChange = '30rem'
    if (window.innerWidth < 991) {
      scaleChange = 2
      marginChange = '22rem'
    }
    const bookWrapper = document.querySelector('.book-wrapper')
    const bookOpenTl = gsap.timeline({
      defaults: { ease: 'linear' },
      scrollTrigger: {
        trigger: '.section_books',
        start: 'top -200%',
        end: 'bottom bottom',
        scrub: true,
      },
    })
    bookOpenTl
      .to(bookWrapper, { opacity: 1, duration: 0.01 })
      .from(bookWrapper, { y: '-15rem' })
      .to(bookWrapper, {
        y: '5rem',
        scale: 1.2,
      })
      .to(bookWrapper, {
        y: '15rem',
      })
      .set('.page-1', {
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      })
      .to('.page-1', {
        force3D: true,
        rotationY: '-180deg',
        transformStyle: 'preserve-3d',
      })
      .to(bookWrapper, {
        x: '-10rem',
        rotation: '0deg',
        scale: scaleChange,
      })
      .to(bookWrapper, {
        marginBottom: marginChange,
      })
      .to('.book-wrapper-text', {
        opacity: 1,
      })
      .to('.book-page-image.is-text', {
        opacity: 0,
      })
      .to(
        '.text-color-change',
        {
          color: '#793671',
        },
        '<'
      )
  }

  // bookOpenInteraction()

  /**
   * Book Open End
   */

  /**
   * Tab Interaction Start
   */

  /**
   * Tab Interaction End
   */

  heroInteraction()
  if (window.innerWidth > 500) {
    // myFunction();

    bookSequenceInteraction()
    secondFoldInteraction()
    randomContentInteraction()
    bookRandomInteraction()
    bookOpenInteraction()
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      // myFunction();

      heroInteraction()
      bookSequenceInteraction()
      secondFoldInteraction()
      randomContentInteraction()
      bookRandomInteraction()
      bookOpenInteraction()
    }
  })
})
