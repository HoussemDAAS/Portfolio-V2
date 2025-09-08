import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import SimpleLogo from '@src/pages/components/clients/components/SimpleLogo';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Clients</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <SimpleLogo name="Pinarea" companyName="Pinarea" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Pinarea</h4>
          </AppearTitle>
          <AppearTitle>
   <div className="p-l">
  Pinarea is an exclusive luxury guest house in Ras Jbal, Bizerte, Tunisia, combining Mediterranean architecture with modern amenities.
</div>
<div className="p-l">
  The property offers a serene and luxurious retreat for up to 10 guests, featuring 5 beautifully furnished bedrooms, elegant living spaces, a private swimming pool, and stunning gardens.
</div>
<div className="p-l">
  Perfect for families, friends, or professional gatherings seeking comfort and sophistication.
</div>


          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Pinarea</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Pinarea is an exclusive luxury guest house in Ras Jbal, Bizerte, Tunisia, combining Mediterranean architecture with modern amenities.</div>
              <div className="p-l">The property offers a serene and luxurious retreat for up to 10 guests, featuring 5 beautifully furnished bedrooms, elegant living spaces, a private swimming pool, and stunning gardens.</div>
              <div className="p-l">Perfect for families, friends, or professional gatherings seeking comfort and sophistication.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <SimpleLogo name="Sehatech" companyName="Sehatech" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Sehatech</h4>
          </AppearTitle>
          <AppearTitle>
         <div className="p-l">
  SehaTech is an insurtech company transforming healthcare through digital solutions that streamline insurance management, reduce costs, and enhance services for patients, insurers, and providers.
</div>
<div className="p-l">
  By offering innovative solutions tailored to the health insurance sector, SehaTech empowers organizations to focus on delivering exceptional care.
</div>

          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Sehatech</h4>
            </AppearTitle>
            <AppearTitle>
       <div className="p-l">
  SehaTech is an insurtech company transforming healthcare through digital solutions that streamline insurance management, reduce costs, and enhance services for patients, insurers, and providers.
</div>
<div className="p-l">
  By offering innovative solutions tailored to the health insurance sector, SehaTech empowers organizations to focus on delivering exceptional care.
</div>

            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <SimpleLogo name="HouseProtein" companyName="HouseProtein" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>House Protein</h4>
          </AppearTitle>
          <AppearTitle>
          <div className="p-l">
  House Protein is a sports nutrition store in Bizerte, Tunisia, offering a wide range of supplements, proteins, amino acids, and energy products.
</div>
<div className="p-l">
  Designed to enhance performance and support individuals in reaching their fitness goals.
</div>

          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>House Protein</h4>
            </AppearTitle>
            <AppearTitle>
         <div className="p-l">
  House Protein is a sports nutrition store in Bizerte, Tunisia, offering a wide range of supplements, proteins, amino acids, and energy products.
</div>
<div className="p-l">
  Designed to enhance performance and support individuals in reaching their fitness goals.
</div>

            </AppearTitle>
          </div>
        </>
      ) : null}
      
      {/* Fourth Client - EXACT copy of second client pattern */}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[3] = el;
        }}
        className={styles.second}
      >
        <SimpleLogo name="mitutoyo" companyName="mitutoyo" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>mitutoyo</h4>
          </AppearTitle>
          <AppearTitle>
        <div className="p-l">
  Mitutoyo offers a wide range of products: micrometers, calipers, height gauges, profilometers (profile measurement), form measuring instruments, gauge blocks and surface plates, as well as coordinate measuring machines (CMMs).
</div>
<div className="p-l">
  The product line also includes hardness testers, profile projectors, measuring microscopes, long working distance objectives, and vision measuring machines.
</div>

          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[3] = el;
            }}
            className={styles.fourthText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>mitutoyo</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Mitutoyo offers a wide range of products: micrometers, calipers, height gauges, profilometers (profile measurement), form measuring instruments, gauge blocks and surface plates, as well as coordinate measuring machines (CMMs).</div>
              <div className="p-l">The product line also includes hardness testers, profile projectors, measuring microscopes, long working distance objectives, and vision measuring machines.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      
      {/* Fifth Client - EXACT copy of third client pattern */}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[4] = el;
        }}
        className={styles.third}
      >
        <SimpleLogo name="benders" companyName="Benders" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Benders</h4>
          </AppearTitle>
          <AppearTitle>
   <div className="p-l">Benders is a creative marketing agency that turns bold ideas into real results.</div>
<div className="p-l">Crafts content that grabs attention, builds community, and grows brands online.</div>
<div className="p-l">Specialties: Creative Strategy | Social Media | Content Creation | Video Production | Web Development</div>
<div className="p-l">Ready to help your brand stand out and achieve its goals.</div>

          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[4] = el;
            }}
            className={styles.fifthText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Benders</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Benders is a creative marketing agency that turns bold ideas into real results.</div>
              <div className="p-l">Crafts content that grabs attention, builds community, and grows brands online.</div>
              <div className="p-l">Specialties: Creative Strategy | Social Media | Content Creation | Video Production | Web Development</div>
              <div className="p-l">Ready to help your brand stand out and achieve its goals.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}

      {/* Sixth Client - EXACT copy of first client pattern */}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2024</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[5] = el;
        }}
        className={styles.first}
      >
        <SimpleLogo name="Sotulub" companyName="Sotulub" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Sotulub</h4>
          </AppearTitle>
          <AppearTitle>
        <div className="p-l">
  Sotulub is Tunisia’s pioneering company in the collection, regeneration, and production of lubricating oils and greases.
</div>
<div className="p-l">
  With over 40 years of expertise, it is recognized for its strong environmental impact and industrial contributions.
</div>

          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[5] = el;
            }}
            className={styles.sixthText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Sotulub</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Sotulub is Tunisia’s pioneering company in the collection, regeneration, and production of lubricating oils and greases.</div>
              <div className="p-l">With over 40 years of expertise, it is recognized for its strong environmental impact and industrial contributions.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
