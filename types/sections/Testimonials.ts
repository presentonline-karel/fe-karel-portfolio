// Imported props
import { ButtonProps } from "../components/Button";
import { TestimonialProps } from "../organisms/Testimonial";

export interface TestimonialsProps {
    data: {
        content: {
            testimonialslabel: string;
            testimonialstitle: string;
            testimonialsbutton: ButtonProps[];
            testimonials: TestimonialProps[];
            bgcolor: string;
        }
        isHidden: Boolean;
    }
}