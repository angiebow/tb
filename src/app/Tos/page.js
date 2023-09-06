import React from "react";
import Background from "@/components/background/Background";
import localFont from "next/font/local";

const lun = localFont({ src: "/lunema-regular.ttf" });
const me = localFont({ src: "/MonumentExtended-Ultrabold.otf" });

const Tos = () => {
  return (
    <div className="bg-white">
      <Background />
    <div className="text-black flex flex-col items-center justify-center min-h-screen">
      

      <div className="bg-transparent p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            Welcome to Toolbeng! These Terms of Service ("Terms") govern your use of Toolbeng's online platform, which offers vehicle repair services and facilitates the buying and selling of automotive parts. By using our services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use Toolbeng.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of the Service</h2>
          <p>
            <strong>2.1. Eligibility:</strong> You must be of legal age in your jurisdiction to use Toolbeng. By using our service, you represent that you are legally eligible to do so.
          </p>
          <p>
            <strong>2.2. Account Registration:</strong> To access certain features of Toolbeng, you may need to register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          <p>
            <strong>2.3. User Conduct:</strong> You agree to use Toolbeng in compliance with all applicable laws and these Terms. You shall not engage in any behavior that is harmful, disruptive, or illegal while using our service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Services Offered</h2>
          <p>
            <strong>3.1. Vehicle Repair Services:</strong> Toolbeng connects users with automotive repair service providers. We do not provide the repair services ourselves but facilitate the process of connecting you with qualified service providers.
          </p>
          <p>
            <strong>3.2. Buying and Selling of Parts:</strong> Toolbeng allows users to buy and sell automotive parts through our platform. Users are responsible for the accuracy of their listings and for fulfilling any transactions they enter into.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Privacy and Data Handling</h2>
          <p>
            Our Privacy Policy explains how we collect, use, and protect your data. By using Toolbeng, you consent to the data practices outlined in our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Payments and Fees</h2>
          <p>
            Some services on Toolbeng may require payment. You agree to pay any fees associated with these services. Payment details will be provided when applicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Dispute Resolution</h2>
          <p>
            Any disputes between users and service providers shall be resolved by the parties involved. Toolbeng is not responsible for disputes but may provide assistance in mediating them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account and access to Toolbeng at our discretion, including for violations of these Terms or for any other reason.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
          <p>
            Toolbeng may update these Terms from time to time. We will notify users of any significant changes, but it is your responsibility to review these Terms periodically. Your continued use of Toolbeng constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms or Toolbeng's services, please contact us at [Contact Information].
          </p>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Tos;
