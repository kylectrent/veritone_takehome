# ---- build stage ----

# Eclipse Temurin is the recommended OpenJDK distribution
FROM maven:3.9-eclipse-temurin-21 as BUILD

# Set the working directory inside the container
WORKDIR /app

COPY pom.xml .
# Cache dependencies to speed up build stage slightly
RUN mvn -q -DskipTests dependency:go-offline

COPY src ./src
RUN mvn -q -DskipTests package

# ---- runtime stage ----

# Base image providing a lightweight Java 21 JRE (Ubuntu Jammy)
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

# Copy the Spring Boot executable JAR built by Maven into the container
# This JAR contains the application code and all runtime dependencies
COPY --from=build /app/target/*.jar app.jar

# Expose the port used by the Spring Boot application
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT [ "java", "-jar", "app.jar" ]