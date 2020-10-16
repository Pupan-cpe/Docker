FROM debian:jessie
ENV text "Hello Docker !!! "
RUN echo ${text}
RUN ls -al
CMD ["echo"," I'm Container"]